package models

type User struct {
	ID       uint   `json:"uid,omitempty" gorm:"primarykey"`
	Email    string `json:"email,omitempty" gorm:"unique"`
	Password string `json:"password,omitempty"`
	FullName string `json:"fullName"`
	Phone    string `json:"phone"`
	Admin    string `json:"admin"`
}

type Product struct {
	ID          uint   `json:"uid,omitempty" gorm:"primarykey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Category    string `json:"category"`
	Price       string `json:"price"`
	City        string `json:"city"`
	Images      string `json:"images"`
	UserId      string `json:"userId"`
	Confirmed   int    `json:"confirmed"`
}
type Comment struct {
	ID        uint   `json:"uid,omitempty" gorm:"primarykey"`
	ProductId string `json:"productId"`
	UserName  string `json:"userName"`
	Title     string `json:"title"`
	Text      string `json:"text"`
	Rating    string `json:"rating"`
}
