package com.stackroute.matchmaker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.matchmaker.model.Certificates;
import com.stackroute.matchmaker.service.UserService;

@CrossOrigin("*") 
@RequestMapping("/api/v1/certificates")
@RestController
public class CertificatesController {
	
	@Autowired
    private KafkaTemplate<String, Certificates> kafkaTemplate;

    private static final String TOPIC = "Certificates";

	@PostMapping("/publish")
    public String post(@RequestBody Certificates certificates) {

        kafkaTemplate.send(TOPIC , certificates);

        return "Published successfully";
    }
    
    
 }
