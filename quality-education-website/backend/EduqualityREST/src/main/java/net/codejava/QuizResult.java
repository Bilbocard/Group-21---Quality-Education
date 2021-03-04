package net.codejava;

public class QuizResult {

	private String Username;
	private Integer QuizID;
	private Integer Marks;
	
	
	public QuizResult() {

	}

	public QuizResult(String username, Integer quizID, Integer marks) {
		super();
		Username = username;
		QuizID = quizID;
		Marks = marks;
	}
	
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public Integer getQuizID() {
		return QuizID;
	}
	public void setQuizID(Integer quizID) {
		QuizID = quizID;
	}
	public Integer getMarks() {
		return Marks;
	}
	public void setMarks(Integer marks) {
		Marks = marks;
	}
	
	
}
