' Launch the specified browser: "chrome.exe", "iexplore.exe", "msedge.exe", etc.
SystemUtil.Run DataTable("p_browser", dtGlobalSheet)

' Set the browser as the AI context for AI-based operations
AIUtil.SetContext Browser("creationtime:=0")

' Navigate to the desired URL
Browser("creationtime:=0").Navigate DataTable("p_url", dtGlobalSheet)

' Sign in
AIUtil("text_box", "User name").Type DataTable("p_username", dtGlobalSheet)
AIUtil("text_box", "Password").TypeSecure DataTable("p_password", dtGlobalSheet)
AIUtil("button", "Sign in").Click

'Documentum Authentication
AIUtil("down_triangle", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("ePersonnel Files").Click
AIUtil("button", "", micFromBottom, 1).Click

'Search
AIUtil("search", micAnyText, micFromTop, 1).Click
AIUtil("text_box", "Multiple Repository Search").Type DataTable("p_searchTerm", dtGlobalSheet)
AIUtil("search", micAnyText, micFromTop, 1).Click

' Validation
AIUtil.FindTextBlock(DataTable("p_searchTerm", dtGlobalSheet), micFromTop, 2).CheckExists True

' Log out
AIUtil("profile").Click
AIUtil.FindTextBlock("Logout").Click
AIUtil("button", "Sign in").CheckExists True

' Closing Browser
Browser("creationtime:=0").Close
