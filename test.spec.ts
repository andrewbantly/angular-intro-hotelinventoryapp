import { Calculator } from "testService";



describe( 'testService', () => {
    it('should add 2 numbsers', () => {
        const service = new Calculator();
        expect(service.add(2,2)).toBe(4);
    });
    it('should sub 2 numbsers', () => {
        const service = new Calculator();
        expect(service.subtract(5,2)).toBe(3);
    });
} )