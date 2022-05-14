describe("Unidad de pruebas para service", () => {
    test("1)Verifica que se envie la informacion del articulo", () => {
        const BlogService = require("./../lib/services/BlogService");
        const Reader = require("./../lib/utils/Reader"); 
        const info = Reader.readJsonFile("./blog.json");
        const answ = [{"content": "El océano no ha sido explorado más del 5%", "id": "1", "img": "agua.jpg", "source": "https://www.nationalgeographic.com.es/ciencia/10-curiosidades-sobre-oceanos_15577", "sub": "", "tittle": "Tamaño del océano"}]
        expect(BlogService.getBlogDataById(info, 1)).toStrictEqual(answ);
    });
});