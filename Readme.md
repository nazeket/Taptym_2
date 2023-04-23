## Progress report - 9
### docker file

![image (9)](https://user-images.githubusercontent.com/78365937/232321253-562b617c-43e5-4567-ab75-e5963722ec5f.png)

### Publishing item

![image (10)](https://user-images.githubusercontent.com/78365937/232321761-8170a160-b224-44a0-9211-303e5c563676.png)

![image](https://user-images.githubusercontent.com/78365937/232321512-1161efd9-e691-48c8-a537-8bafe63460d9.png)

### Roles: client, seller 

![image](https://user-images.githubusercontent.com/78365937/232321525-784c154f-770c-4110-9ecc-5a25d4087e64.png)

![image](https://user-images.githubusercontent.com/78365937/232321534-dc268a76-3d6a-40db-b60d-acae95b23430.png)

### Admin 
#### admin=0 when registering. then it means non-admin.

![image (7)](https://user-images.githubusercontent.com/78365937/232321744-26f2d8f9-aeec-4494-958e-b1680bcd20d0.png)





## Progress report - 8
### Final(WELCOME PAGE)
#### Result: 

https://user-images.githubusercontent.com/78365937/230956797-16cb999b-c8ad-4516-a6b3-e1a50204b0ca.MP4

#### Welcome page
```vue
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
  
  
```

## Progress report - 7

```golang
func (ProductController) GetProductList(c echo.Context) error {
	var modelInstance []models.Product
	utils.DB.Find(&modelInstance)
	fmt.Println("console")
	fmt.Println(modelInstance)
	return c.JSON(http.StatusOK, modelInstance)
}
```

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
