import request from 'supertest';

describe('[SUCCESS]  Environment variables should bring sitting variables to Test', () => {
  it('Some test name', () => {
    expect(process.env.NODE_ENV).toBe('test');
    // expect(process.env.MONGO_URL).toBe("mongodb://localhost:27017/sisdigitaTest")
  });
});
