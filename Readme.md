## Progress report - 7
'''golang
func (ProductController) GetProductList(c echo.Context) error {
	var modelInstance []models.Product
	utils.DB.Find(&modelInstance)
	fmt.Println("console")
	fmt.Println(modelInstance)
	return c.JSON(http.StatusOK, modelInstance)
}
'''

### 1. Filtering items based on price, rating 

```golang

```
####Result:
https://user-images.githubusercontent.com/78365937/230440596-466e3489-f8e7-407e-a963-987b74011565.gf
https://user-images.githubusercontent.com/78365937/230441286-3704aef1-f07b-478b-9b79-4145bbef71fc.gf

### 2. Giving rating for items
```golang

```
####Result:
https://user-images.githubusercontent.com/78365937/230440246-a5af0b1e-dcee-4534-8da4-5b5206443b14.gf
### 3. Commenting items 
```golang

```
####Result:
https://user-images.githubusercontent.com/78365937/230441293-71574633-290f-43ec-9e8a-2d6949b1cad0.gf
