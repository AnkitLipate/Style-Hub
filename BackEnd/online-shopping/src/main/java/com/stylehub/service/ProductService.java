package com.stylehub.service;

import org.springframework.web.multipart.MultipartFile;

import com.stylehub.model.*;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

	void deleteProduct(Product product);

	void updateProduct(Product product, MultipartFile image);

}
