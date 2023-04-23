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

	productRouter := e.Group("/announcement")
	productController := new(controllers.ProductController)

	authRouter := e.Group("/auth")
	authController := new(controllers.AuthController)

	productRouter.POST("/create", productController.CreateAnnouncement)
	productRouter.POST("/add-comment", productController.AddComment)
	productRouter.GET("/comments", productController.GetCommentList)
	productRouter.GET("/list", productController.GetProductList)
	productRouter.GET("/:id", productController.GetProductById)
	productRouter.POST("/update/:id", productController.UpdateProductById)
	productRouter.GET("/search", productController.SearchByQuery)
	authRouter.GET("/user", authController.User, middleware.JWTAuth)
	authRouter.GET("/logout", authController.Logout)
	authRouter.POST("/signup", authController.Signup)
	authRouter.POST("/login", authController.Login)

	e.Start("localhost:8000")
}
