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
public class QuizQuestionController {
	
	@Autowired
	private QuizQuestionService service;
	
	@GetMapping("/quiz_question")
	public List<QuizQuestion> list() {
		return service.listAll();
	}
	
	@GetMapping("/quiz_question/{QuestionID}")
	public ResponseEntity<QuizQuestion> get(@PathVariable Integer QuestionID) {
		try {
		QuizQuestion quizQuestion = service.get(QuestionID);
		return new ResponseEntity<QuizQuestion>(quizQuestion, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<QuizQuestion>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/quiz_question")
	public void add(@RequestBody QuizQuestion quizQuestion) {
		service.save(quizQuestion);
		
	}
	
	@PutMapping("/quiz_question/{QuestionID}")
	public ResponseEntity<?> update(@RequestBody QuizQuestion quizQuestion,
			@PathVariable Integer QuestionID) {
		try {
		QuizQuestion existQuizQuestion = service.get(QuestionID);
		service.save(quizQuestion);
		return new ResponseEntity<>(existQuizQuestion, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/quiz_question/{QuestionID}")
	public void delete(@PathVariable Integer QuestionID) {
		service.delete(QuestionID);
	}
}
