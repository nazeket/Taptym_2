package main

import (
	"app/controllers"
	"app/middleware"
	"app/utils"

	"github.com/labstack/echo/v4"
	echomiddleware "github.com/labstack/echo/v4/middleware"
)

func main() {
	utils.InitDB()
	e := echo.New()
	e.Use(echomiddleware.CORSWithConfig(echomiddleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{"*"},
		AllowMethods: []string{"*"},
	}))
	e.Use(echomiddleware.Logger())
	e.Use(echomiddleware.Recover())

	productRouter := e.Group("/product")
	productController := new(controllers.ProductController)

	authRouter := e.Group("/auth")
	authController := new(controllers.AuthController)

	productRouter.POST("/create-product", productController.CreateProduct)
	productRouter.GET("/get-product-list", productController.GetProductList)
	productRouter.GET("/get-product/:id", productController.GetProductById)
	productRouter.POST("/update-product/:id", productController.UpdateProductById)
	productRouter.GET("/search", productController.SearchByQuery)
	authRouter.GET("/user", authController.User, middleware.JWTAuth)
	authRouter.GET("/logout", authController.Logout)
	authRouter.POST("/signup", authController.Signup)
	authRouter.POST("/login", authController.Login)

	e.Start("localhost:8000")
}
