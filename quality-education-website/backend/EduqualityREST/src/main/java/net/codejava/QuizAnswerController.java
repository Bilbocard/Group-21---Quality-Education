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
public class QuizAnswerController {

	@Autowired
	private QuizAnswerService service;
	
	@GetMapping("/quiz_answer")
	public List<QuizAnswer> list() {
		return service.listAll();
	}
	
	@GetMapping("/quiz_answer/{Username}")
	public ResponseEntity<QuizAnswer> get(@PathVariable Integer AnswerID) {
		try {
		QuizAnswer user = service.get(AnswerID);
		return new ResponseEntity<QuizAnswer>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<QuizAnswer>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/quiz_answer")
	public void add(@RequestBody QuizAnswer user) {
		service.save(user);
		
	}
	
	@PutMapping("/quiz_answer/{Username}")
	public ResponseEntity<?> update(@RequestBody QuizAnswer quizAnswer,
			@PathVariable Integer AnswerID) {
		try {
		QuizAnswer existQuizAnswer = service.get(AnswerID);
		service.save(quizAnswer);
		return new ResponseEntity<>(existQuizAnswer, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/quiz_answer/{AnswerID}")
	public void delete(@PathVariable Integer AnswerID) {
		service.delete(AnswerID);
	}
}
