package com.stackroute.matchmaker.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.stackroute.matchmaker.model.User;
import com.stackroute.matchmaker.repository.UserRepository;

public class UserService {
	
	private UserRepository userRepo;
	
	@Autowired
	public UserService(UserRepository certificatesRepo) {
		super();
		this.userRepo = certificatesRepo;
	}
	
	public User getByUsername(String profileId) {
		return userRepo.getByUsername(profileId);
	}

}
