package com.stylehub.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stylehub.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	
	List<User> findByRole(String role);
	User findByEmailId(String email);
	User findByEmailIdAndRole(String emailId, String role);	

}
