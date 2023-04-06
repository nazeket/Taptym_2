package models

type User struct {
	ID       uint   `json:"uid,omitempty" gorm:"primarykey"`
	Email    string `json:"email,omitempty" gorm:"unique"`
	Password string `json:"password,omitempty"`
	Phone    string `json:"phone"`
}

type Product struct {
	ID          uint   `json:"uid,omitempty" gorm:"primarykey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Comment     string `json:"comment"`
	Price       string `json:"price"`
	ImageUrl    string `json:"image_url"`
	Rating      string `json:"rating"`
}
