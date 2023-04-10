## Progress report - 8
### Final(WELCOME PAGE)
#### Result: 

https://user-images.githubusercontent.com/78365937/230956797-16cb999b-c8ad-4516-a6b3-e1a50204b0ca.MP4

#### Welcome page
'''vue
<template>
    <div class="px-4 py-4">
      <div class="d-flex my-10 align-center justify-center">
        <img src="@/assets/logo.svg" alt="" style="height: 35px">
      </div>
      <div class="d-flex justify-center banner1">
        <img src="@/assets/banner1.png" alt="">
      </div>
      <h3>Создавайте заявку в пару <br> кликов </h3>
      <p>Добавляйте свою услуги, жилье, автомобиль, или вещи которые хотите продать или купить.</p>
      <the-button name="Начать" class="btn-primary py-4 mt-6 mb-4"/>
      <div class="d-flex bottom align-center justify-center">
        <span>Уже есть аккаунт? <router-link to="/auth/login"> Войти</router-link></span>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import TheButton from "@/components/form/TheButton.vue";
  </script>
  <style lang="scss">
  .banner1 {
    img {
      max-width: 285px;
    }
  }
  
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-top: 23px;
    margin-bottom: 12px;
  }
  
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }
  
  .bottom{
    padding-bottom: 30px;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #8E8E93;
  
      a {
        color: #2580D5;
      }
    }
  }
  
  .v-btn {
    &__content {
      color: white;
    }
  }
  </style>
'''
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
