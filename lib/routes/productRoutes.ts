import { ProductController } from "../controllers/productController";

export class productRoutes {

    public productController: ProductController = new ProductController();

    public routes(app): void {
        
        // Contact 
        app.route('/product')
            // GET endpoint 
            .get(this.productController.getProducts)
            // POST endpoint
            .post(this.productController.addProduct)

        // get a specific contact
        app.route('/product/:productId')
            .get(this.productController.getProductWithID)
            // update a specific contact
            .put(this.productController.updateProduct)
            // delete a specific contact
            .delete(this.productController.deleteProduct)
    }
}