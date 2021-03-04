package net.codejava;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizQuestionService {

	@Autowired
	private QuizQuestionRepository repo;
	
	public List<QuizQuestion> listAll() {
		return repo.findAll();
	}
	
	public void save(QuizQuestion quizQuestion) {
		repo.save(quizQuestion);
	}
	
	public QuizQuestion get(Integer QuestionID) {
		return repo.findById(QuestionID).get();
	}
	
	public void delete(Integer QuestionID) {
		repo.deleteById(QuestionID);
	}
}
