package com.stylehub.service;


import com.stylehub.model.Review;

public interface ReviewService {

	 public void addReview(Review review);

	public void deleteReview(Review review);

	public java.util.List<Review> getReviewsByProductId(int productId);
}
