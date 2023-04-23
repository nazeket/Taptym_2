package middleware

import (
	"net/http"

	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

func JWTAuth(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		jwtToken := c.Request().Header.Get("Authorization")
		token, err := jwt.ParseWithClaims(jwtToken, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte("secret"), nil
		})

		if err != nil {
			return c.JSON(http.StatusUnauthorized, echo.Map{"message": "malformed jwt"})
		}

		claims := token.Claims.(*jwt.RegisteredClaims)

		c.Set("uid", claims.Issuer)
		return next(c)
	}
}
