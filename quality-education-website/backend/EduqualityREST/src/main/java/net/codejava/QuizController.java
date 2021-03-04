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
public class QuizController {

	@Autowired
	private QuizService service;
	
	@GetMapping("/quiz")
	public List<Quiz> list() {
		return service.listAll();
	}
	
	@GetMapping("/quiz/{QuizID}")
	public ResponseEntity<Quiz> get(@PathVariable Integer QuizID) {
		try {
		Quiz quiz = service.get(QuizID);
		return new ResponseEntity<Quiz>(quiz, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Quiz>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/quiz")
	public void add(@RequestBody Quiz quiz) {
		service.save(quiz);
		
	}
	
	@PutMapping("/quiz/{QuizID}")
	public ResponseEntity<?> update(@RequestBody Quiz quiz,
			@PathVariable Integer QuizID) {
		try {
		Quiz existQuiz = service.get(QuizID);
		service.save(quiz);
		return new ResponseEntity<>(existQuiz, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/quiz/{QuizID}")
	public void delete(@PathVariable Integer QuizID) {
		service.delete(QuizID);
	}
}
