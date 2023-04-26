@WebServlet(name = "testServlet",
        urlPatterns = {"/test"},
        loadOnStartup = 1)
public class TestServlet extends HttpServlet {

  @Override
  protected void doGet (HttpServletRequest req,
                        HttpServletResponse resp)
            throws ServletException, IOException {

      resp.setContentType("text/html");
      PrintWriter writer = resp.getWriter();
      writer.println("test message");
  }
}