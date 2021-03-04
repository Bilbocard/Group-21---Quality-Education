package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QuizAnswer {

	private Integer AnswerID;
	private Integer QuestionID;
	private String Answer;
	private Integer IsCorrect;
	
	
	public QuizAnswer() {

	}

	public QuizAnswer(Integer answerID, Integer questionID, String answer, Integer isCorrect) {
		super();
		AnswerID = answerID;
		QuestionID = questionID;
		Answer = answer;
		IsCorrect = isCorrect;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getAnswerID() {
		return AnswerID;
	}
	public void setAnswerID(Integer answerID) {
		AnswerID = answerID;
	}
	public Integer getQuestionID() {
		return QuestionID;
	}
	public void setQuestionID(Integer questionID) {
		QuestionID = questionID;
	}
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	public Integer getIsCorrect() {
		return IsCorrect;
	}
	public void setIsCorrect(Integer isCorrect) {
		IsCorrect = isCorrect;
	}
	
	
}
