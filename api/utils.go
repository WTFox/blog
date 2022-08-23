package handler

import "fmt"

// addTwoIntegersReturnString takes two integers and returns the sum as a string
func addTwoIntegersReturnString(a int, b int) string {
	return fmt.Sprintf("%d", a+b)
}
