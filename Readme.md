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

```vue
const sortedProducts = computed(() => {
  return store.state.products.sort((a, b) => {
    if (Number(a[sortTerm.value]) > Number(b[sortTerm.value])) {
      return 1
    }
    if (Number(a[sortTerm.value]) < Number(b[sortTerm.value])) {
      return -1
    }
    return 0
  })
})
const fetchProductList = async () => {
  store.state.products = await store.dispatch('fetchProductList')
}
fetchProductList()
const searchProduct = async () => {
  store.state.products = await store.dispatch('searchProduct')
}

```
#### Result:
https://user-images.githubusercontent.com/78365937/230440596-466e3489-f8e7-407e-a963-987b74011565.MP4

https://user-images.githubusercontent.com/78365937/230441286-3704aef1-f07b-478b-9b79-4145bbef71fc.MP4

### 2. Giving rating for items
```vue
const sortedProducts = computed(() => {
  return store.state.products.sort((a, b) => {
    if (Number(a[sortTerm.value]) > Number(b[sortTerm.value])) {
      return 1
    }
    if (Number(a[sortTerm.value]) < Number(b[sortTerm.value])) {
      return -1
    }
    return 0
  })
})
const fetchProductList = async () => {
  store.state.products = await store.dispatch('fetchProductList')
}
fetchProductList()
const searchProduct = async () => {
  store.state.products = await store.dispatch('searchProduct')
}

```
#### Result:
https://user-images.githubusercontent.com/78365937/230440246-a5af0b1e-dcee-4534-8da4-5b5206443b14.MP4

### 3. Commenting items 

```golang
func (ProductController) UpdateProductById(c echo.Context) error {
	data := echo.Map{}
	if err := c.Bind(&data); err != nil {
		return err
	}

	utils.DB.Model(&models.Product{}).Where("id = ?", c.Param("id")).Update("comment", data["comment"])

	return c.JSON(http.StatusOK, echo.Map{"message": "successfully updated product"})
}
```
#### Result:
https://user-images.githubusercontent.com/78365937/230441293-71574633-290f-43ec-9e8a-2d6949b1cad0.MP4
