package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizAnswerService {

	@Autowired
	private QuizAnswerRepository repo;
	
	public List<QuizAnswer> listAll() {
		return repo.findAll();
	}
	
	public void save(QuizAnswer quizAnswer) {
		repo.save(quizAnswer);
	}
	
	public QuizAnswer get(Integer AnswerID) {
		return repo.findById(AnswerID).get();
	}
	
	public void delete(Integer AnswerID) {
		repo.deleteById(AnswerID);
	}
}
