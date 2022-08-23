package handler

import "fmt"

// AddTwoIntegersReturnString takes two integers and returns the sum as a string
func AddTwoIntegersReturnString(a int, b int) string {
	return fmt.Sprintf("%d", a+b)
}
