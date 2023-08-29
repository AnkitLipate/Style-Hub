package com.stylehub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.dao.ReviewDao;
import com.stylehub.model.*;

@Service
public class ReviewServiceImpl implements ReviewService  {
	@Autowired
	private ReviewDao reviewDao;
	
	public void addReview(Review review) {
		reviewDao.save(review);
		
		
	}

	@Override
	public void deleteReview(Review review) {
		reviewDao.delete(review);
		
	}

	@Override
	public List<Review> getReviewsByProductId(int productId) {
	    List<Review> reviews = reviewDao.findByProduct_Id(productId);
	    return reviews;
	}





}
