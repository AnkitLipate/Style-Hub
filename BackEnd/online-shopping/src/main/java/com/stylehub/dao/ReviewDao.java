package com.stylehub.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stylehub.model.Review;

@Repository
public interface ReviewDao extends JpaRepository<Review, Long> {
    
	List<Review> findByProduct_Id(int productId);
}
