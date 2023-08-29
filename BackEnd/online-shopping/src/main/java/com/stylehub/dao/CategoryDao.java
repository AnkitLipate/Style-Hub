package com.stylehub.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stylehub.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
