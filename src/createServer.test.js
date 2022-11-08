const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      //Arrange || Yang diperlukan
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({
        mathBasic: MathBasic,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /substract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      //Arrange || Yang diperlukan
      const a = 10;
      const b = 20;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({
        mathBasic: MathBasic,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(-10);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      //Arrange || Yang diperlukan
      const a = 10;
      const b = 20;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({
        mathBasic: MathBasic,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
      //Arrange || Yang diperlukan
      const a = 20;
      const b = 10;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({
        mathBasic: MathBasic,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is calculation result of rectangle perimeter by length and width', async () => {
      //Arrange || Yang diperlukan
      const length = 10;
      const width = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectanglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateRectanglePerimeter'
      );
      const server = createServer({
        figureCalculator,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is calculation result of rectangle area by length and width', async () => {
      //Arrange || Yang diperlukan
      const length = 10;
      const width = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectangleArea = jest.spyOn(
        figureCalculator,
        'calculateRectangleArea'
      );

      const server = createServer({
        figureCalculator,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
    it('should respond with a status code of 200 and the payload value is calculation result of triangle perimeter by sides and base', async () => {
      //Arrange || Yang diperlukan
      const sideA = 15;
      const sideB = 15;
      const base = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTrianglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateTrianglePerimeter'
      );

      const server = createServer({
        figureCalculator,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(40);
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
    it('should respond with a status code of 200 and the payload value is calculation result of triangle area by base and height', async () => {
      //Arrange || Yang diperlukan
      const height = 15;
      const base = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTriangleArea = jest.spyOn(
        figureCalculator,
        'calculateTriangleArea'
      );

      const server = createServer({
        figureCalculator,
      });

      //Action || Aksi yang dilakukan untuk testing
      const response = await server.inject({
        method: 'GET',
        url: ` /triangle/area/${base}/${height}`,
      });

      //Assert || Respon yang diharapkan
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(75);
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
    });
  });
});
