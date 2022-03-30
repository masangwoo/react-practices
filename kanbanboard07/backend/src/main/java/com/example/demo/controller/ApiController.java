package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;

	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/card/{cardNo}")
	public ResponseEntity<JsonResult> readTask(@PathVariable(value="cardNo") Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAll(cardNo)));
	}

	@DeleteMapping("/card/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable(value="no") Long no) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.delete(no)));
	}
	
	@PostMapping("/card")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo) {
		taskRepository.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	

}