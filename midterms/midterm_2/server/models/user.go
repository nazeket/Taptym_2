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
	TradeType   string `json:"tradeType"`
	Category    string `json:"category"`
	Price       string `json:"price"`
	City        string `json:"city"`
	Images      string `json:"images"`
}
