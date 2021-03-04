package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QuizQuestion {

	private Integer QuestionID;
	private Integer QuizID;
	private String Question;
	
	
	public QuizQuestion() {

	}

	public QuizQuestion(Integer questionID, Integer quizID, String question) {
		super();
		QuestionID = questionID;
		QuizID = quizID;
		Question = question;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getQuestionID() {
		return QuestionID;
	}
	public void setQuestionID(Integer questionID) {
		QuestionID = questionID;
	}
	public Integer getQuizID() {
		return QuizID;
	}
	public void setQuizID(Integer quizID) {
		QuizID = quizID;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	
	
}
