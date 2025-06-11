import { translateToUnicode } from 'braillify'

describe('index', () => {
  it('should translate to unicode', () => {
    const result = translateToUnicode('안녕하세요.')
    expect(result).toBe('⠣⠒⠉⠻⠚⠠⠝⠬⠲')
  })
})
