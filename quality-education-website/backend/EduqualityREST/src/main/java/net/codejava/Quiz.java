package net.codejava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quiz {

	private Integer QuizID;
	private String QuizName;
	private String Subject;
	private Integer Tier;
	
	
	public Quiz() {

	}

	public Quiz(Integer quizID, String quizName, String subject, Integer tier) {
		super();
		QuizID = quizID;
		QuizName = quizName;
		Subject = subject;
		Tier = tier;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getQuizID() {
		return QuizID;
	}
	public void setQuizID(Integer quizID) {
		QuizID = quizID;
	}
	public String getQuizName() {
		return QuizName;
	}
	public void setQuizName(String quizName) {
		QuizName = quizName;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String subject) {
		Subject = subject;
	}
	public Integer getTier() {
		return Tier;
	}
	public void setTier(Integer tier) {
		Tier = tier;
	}
	
	
}
