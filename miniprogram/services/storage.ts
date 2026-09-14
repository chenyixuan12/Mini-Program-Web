import { LearningRecord, MasteryStatus } from '../types/question'

const STORAGE_PREFIX = 'fe-interview:'
const RECORDS_KEY = `${STORAGE_PREFIX}learning-records`
const SCHEMA_VERSION_KEY = `${STORAGE_PREFIX}schema-version`
const SCHEMA_VERSION = 1

const isMasteryStatus = (value: unknown): value is MasteryStatus =>
  value === 'mastered' || value === 'uncertain' || value === 'unmastered'

const isLearningRecord = (value: unknown): value is LearningRecord => {
  if (typeof value !== 'object' || value === null) return false
  const record = value as Record<string, unknown>
  return typeof record.questionId === 'string'
    && isMasteryStatus(record.mastery)
    && typeof record.isFavorite === 'boolean'
    && typeof record.reviewCount === 'number'
    && typeof record.lastReviewedAt === 'number'
    && typeof record.updatedAt === 'number'
}

function readRecords(): Record<string, LearningRecord> {
  try {
    const raw = wx.getStorageSync(RECORDS_KEY) as unknown
    const parsed = typeof raw === 'string' ? JSON.parse(raw) as unknown : raw
    if (!Array.isArray(parsed)) return {}
    return parsed.reduce<Record<string, LearningRecord>>((records, item) => {
      if (isLearningRecord(item)) records[item.questionId] = item
      return records
    }, {})
  } catch (_error) {
    return {}
  }
}

function writeRecords(records: Record<string, LearningRecord>): void {
  wx.setStorageSync(RECORDS_KEY, Object.keys(records).map((key) => records[key]))
}

export function initializeStorage(): void {
  const storedVersion = wx.getStorageSync(SCHEMA_VERSION_KEY) as unknown
  if (storedVersion !== SCHEMA_VERSION) wx.setStorageSync(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
}

export function getLearningRecords(): Record<string, LearningRecord> {
  return readRecords()
}

export function updateMastery(questionId: string, mastery: MasteryStatus): LearningRecord {
  const records = readRecords()
  const now = Date.now()
  const previous = records[questionId]
  const next: LearningRecord = {
    questionId,
    mastery,
    isFavorite: previous === undefined ? false : previous.isFavorite,
    reviewCount: (previous === undefined ? 0 : previous.reviewCount) + 1,
    lastReviewedAt: now,
    updatedAt: now,
  }
  records[questionId] = next
  writeRecords(records)
  return next
}

export function toggleFavorite(questionId: string): LearningRecord {
  const records = readRecords()
  const now = Date.now()
  const previous = records[questionId]
  const next: LearningRecord = {
    questionId,
    mastery: previous === undefined ? 'uncertain' : previous.mastery,
    isFavorite: !(previous === undefined ? false : previous.isFavorite),
    reviewCount: previous === undefined ? 0 : previous.reviewCount,
    lastReviewedAt: previous === undefined ? 0 : previous.lastReviewedAt,
    updatedAt: now,
  }
  records[questionId] = next
  writeRecords(records)
  return next
}
