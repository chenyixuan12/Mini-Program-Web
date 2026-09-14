// app.ts
import { initializeStorage } from './services/storage'

App<IAppOption>({
  globalData: {},
  onLaunch() {
    initializeStorage()
  },
})
