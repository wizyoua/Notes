<?php 

error_reporting(E_ALL);
ini_set('display_errors', 'On');

require 'classes/database.php';

$database = new Database;


$post = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

if(isset($_POST['delete'])){
	$delete_id = $_POST['delete_id'];
	$database->query('DELETE FROM posts WHERE id = :id');
	$database->bind(':id', $delete_id);
	$database->execute();
}

if(isset($_POST['submit'])){
	$id = $post['id'];
	$title = $post['title'];
	$body = $post['body'];

	$database->query('UPDATE posts SET title = :title, body = :body WHERE id = :id');
	$database->bind(':title', $title);
	$database->bind(':body', $body);
	$database->bind(':id', $id);
	$database->execute();

	

}

$database->query('SELECT * FROM posts');
$rows = $database->resultset();

?>

<h1>Posts</h1>
<form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
	<input type="text" name="title" placeholder="title" /><br>
	<label for="body">Post Body</label><br>
	<textarea name="body"></textarea><br>
	<input type="text" name="id" placeholder="specify id" /><br>
	<input type="submit" name="submit" value="Submit">
</form>
<div>
	<?php foreach($rows as $row) : ?>
		<div>
			<h3><?php echo $row['title']; ?></h3>
			<p><?php echo $row['body']; ?></p>
			<br>
			<form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
				<input type="hidden" name="delete_id" value="<?php echo $row['id'];?>">
				<input type="submit" name="delete" value="Delete">
			</form>
		</div>
	<?php endforeach;?>
</div>


