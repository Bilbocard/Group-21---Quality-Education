package net.codejava;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizResultController {

	@Autowired
	private QuizResultService service;
	
	@GetMapping("/quiz_result")
	public List<QuizResult> list() {
		return service.listAll();
	}
	
	@GetMapping("/quiz_result/{Username}")
	public ResponseEntity<QuizResult> get(@PathVariable String Username) {
		try {
		QuizResult quizResult = service.get(Username);
		return new ResponseEntity<QuizResult>(quizResult, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<QuizResult>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/quiz_result")
	public void add(@RequestBody QuizResult quizResult) {
		service.save(quizResult);
		
	}
	
	@PutMapping("/quiz_result/{Username}")
	public ResponseEntity<?> update(@RequestBody QuizResult quizResult,
			@PathVariable String Username) {
		try {
		QuizResult existQuizResult = service.get(Username);
		service.save(quizResult);
		return new ResponseEntity<>(existQuizResult, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/quiz_result/{Username}")
	public void delete(@PathVariable String Username) {
		service.delete(Username);
	}
}
