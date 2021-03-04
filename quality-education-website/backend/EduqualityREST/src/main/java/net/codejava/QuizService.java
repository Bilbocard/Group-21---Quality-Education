package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizService {

	@Autowired
	private QuizRepository repo;
	
	public List<Quiz> listAll() {
		return repo.findAll();
	}
	
	public void save(Quiz quiz) {
		repo.save(quiz);
	}
	
	public Quiz get(Integer QuizID) {
		return repo.findById(QuizID).get();
	}
	
	public void delete(Integer QuizID) {
		repo.deleteById(QuizID);
	}
}
