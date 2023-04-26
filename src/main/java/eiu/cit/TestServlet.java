package eiu.cit;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

@WebServlet(name = "testServlet", urlPatterns = { "/test" }, loadOnStartup = 1)
public class TestServlet extends HttpServlet {

	private final static String url = "jdbc:mysql://localhost:3306/myfirstwebapp"; // table details
	private final static String username = "eiu";
	private final static String password = "4eiu";

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("text/html");
		PrintWriter writer = resp.getWriter();
		writer.println("test message");
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		JSONObject obj = new JSONObject(req.getReader().readLine());

		String query = "SELECT COUNT(login) = 1 as result FROM account WHERE login =?";
		Connection con;
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, obj.getString("login"));
			ResultSet rs = st.executeQuery();
			StringBuilder report = new StringBuilder();
			if (rs.next()) {
				if (rs.getInt("result") == 1) {
					report.append("The account exists");
				} else {
					report.append("The account does not exist");
				}
			}
			st.close();
			con.close();

			resp.setContentType("text/html");
			PrintWriter writer = resp.getWriter();
			writer.println(report);

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}