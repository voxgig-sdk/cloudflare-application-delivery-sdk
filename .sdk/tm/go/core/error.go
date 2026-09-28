package core

type CloudflareApplicationDeliveryError struct {
	IsCloudflareApplicationDeliveryError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareApplicationDeliveryError(code string, msg string, ctx *Context) *CloudflareApplicationDeliveryError {
	return &CloudflareApplicationDeliveryError{
		IsCloudflareApplicationDeliveryError: true,
		Sdk:              "CloudflareApplicationDelivery",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareApplicationDeliveryError) Error() string {
	return e.Msg
}
