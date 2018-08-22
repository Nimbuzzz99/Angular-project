package com.stackroute.matchmaker.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.stackroute.matchmaker.model.User;

public interface UserRepository extends MongoRepository<User, Integer>{
	public User getByUsername(String username);	
}
