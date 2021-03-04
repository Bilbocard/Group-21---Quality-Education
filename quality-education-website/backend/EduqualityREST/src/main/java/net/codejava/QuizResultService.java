package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizResultService {

	@Autowired
	private QuizResultRepository repo;
	
	public List<QuizResult> listAll() {
		return repo.findAll();
	}
	
	public void save(QuizResult quizResult) {
		repo.save(quizResult);
	}
	
	public QuizResult get(String Username) {
		return repo.findById(Username).get();
	}
	
	public void delete(String Username) {
		repo.deleteById(Username);
	}
}
