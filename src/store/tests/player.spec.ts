import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, getActivePinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should move to left', () => {
    const { movePlayerToLeft, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToLeft()
    expect(player.x).toBe(0)
  })

  it('should move to right', () => {
    const { movePlayerToRight, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToRight()
    expect(player.x).toBe(2)
  })

  it('should move to top', () => {
    const { movePlayerToTop, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToTop()
    expect(player.y).toBe(0)
  })

  it('should move to down', () => {
    const { movePlayerToDown, player } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToDown()
    expect(player.y).toBe(2)
  })
})
