package com.stylehub.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stylehub.dto.AddToCartRequest;
import com.stylehub.dto.CartResponse;

public interface CartService {
	
	public void addToCart(AddToCartRequest addToCartRequest);
	
	public CartResponse getMyCart(int userId) throws JsonProcessingException;
	
	public void removeCartItem(int cartId);

}
