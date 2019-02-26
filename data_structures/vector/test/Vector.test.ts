import Vector from '../Vector'

describe("Vector Test", () => {
  it("test vector uniq", () => {
    const vec = new Vector([1,1,2,3,4,3,6])
    expect(vec.uniq()).toEqual([1,2,3,4,6])
  })

  it('should be map vector ', () => {
    const vec = new Vector([1,2,3,4])
    expect(vec.map((item: any) => item*item)).toEqual([1,4,9,16])
  })
})