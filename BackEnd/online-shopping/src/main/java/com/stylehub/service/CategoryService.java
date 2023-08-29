package com.stylehub.service;

import java.util.List;

import com.stylehub.model.Category;

public interface CategoryService {
	
	public List<Category> getAllCategories();
	
	public Category addCategory(Category category) ;
	
	public void deleteCategoryById(int categoryId);

}
