import { CategoryController } from "../controllers/categoryController";

export class categoryRoutes {

    public categoryController: CategoryController = new CategoryController();

    public routes(app): void {
        
        // Contact 
        app.route('/category')
            // GET endpoint 
            .get(this.categoryController.getCategories)
            // POST endpoint
            .post(this.categoryController.addCategory)

        // get a specific contact
        app.route('/category/:categoryId')
            .get(this.categoryController.getCategoryWithID)
            // update a specific contact
            .put(this.categoryController.updateCategory)
            // delete a specific contact
            .delete(this.categoryController.deleteCategory)
    }
}