package com.stylehub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stylehub.dto.AddToCartRequest;
import com.stylehub.dto.CartResponse;
import com.stylehub.service.CartService;

@RestController
@RequestMapping("api/user/")
@CrossOrigin // (origins = "http://localhost:3000")
public class CartController {


	@Autowired
    private CartService cartService;

	@PostMapping("cart/add")
	public ResponseEntity add(@RequestBody AddToCartRequest addToCartRequest) {

		System.out.println("request came for ADD PRODUCT TO CART");
		System.out.println(addToCartRequest);
		cartService.addToCart(addToCartRequest);
		return new ResponseEntity(HttpStatus.OK);

	}

	@GetMapping("mycart")
	public ResponseEntity getMyCart(@RequestParam("userId") int userId) throws JsonProcessingException 
	{

		System.out.println("request came for MY CART for USER ID : " + userId);
		CartResponse cartResponse = cartService.getMyCart(userId);
		return new ResponseEntity(cartResponse, HttpStatus.OK);
		
	}

	@GetMapping("mycart/remove")
	public ResponseEntity removeCartItem(@RequestParam("cartId") int cartId) {

		System.out.println("request came for DELETE CART ITEM WHOSE ID IS : " + cartId);

		cartService.removeCartItem(cartId);

		return new ResponseEntity("SUCCESS", HttpStatus.OK);

	}

}
